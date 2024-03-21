import uuid
from collections.abc import Iterator
from typing import Literal, TypedDict, Unpack, cast

import stripe as stripe_lib
from sqlalchemy import desc
from stripe import error as stripe_lib_error

from polar.account.schemas import AccountCreate
from polar.config import settings
from polar.currency.schemas import CurrencyAmount
from polar.exceptions import PolarError
from polar.integrations.stripe.schemas import (
    DonationPaymentIntentMetadata,
    PledgePaymentIntentMetadata,
)
from polar.integrations.stripe.service import stripe as stripe_service
from polar.models.organization import Organization
from polar.models.user import User
from polar.postgres import AsyncSession, sql


class DonationService:
    async def create_payment_intent(
        self,
        session: AsyncSession,
        *,
        user: User | None,
        on_behalf_of_organization: Organization | None,
        to_organization: Organization,
        amount: CurrencyAmount,
        receipt_email: str,
    ) -> stripe_lib.PaymentIntent:
        metadata = DonationPaymentIntentMetadata(
            organization_id=to_organization.id,
            organization_name=to_organization.name,
        )

        if on_behalf_of_organization:
            metadata.on_behalf_of_organization_id = on_behalf_of_organization.id

        return await stripe_service.create_payment_intent(
            session=session,
            amount=amount,
            metadata=metadata,
            receipt_email=receipt_email,
            description=f"Donation to {to_organization.name}",
            customer=on_behalf_of_organization if on_behalf_of_organization else user,
        )

    async def update_payment_intent(
        self,
        session: AsyncSession,
        *,
        payment_intent_id: str,
        user: User | None,
        on_behalf_of_organization: Organization | None,
        amount: CurrencyAmount,
        receipt_email: str,
        setup_future_usage: Literal["off_session", "on_session"] | None = None,
    ) -> stripe_lib.PaymentIntent:
        metadata = DonationPaymentIntentMetadata()

        if on_behalf_of_organization:
            metadata.on_behalf_of_organization_id = on_behalf_of_organization.id

        return await stripe_service.modify_payment_intent(
            session=session,
            id=payment_intent_id,
            amount=amount,
            metadata=metadata,
            receipt_email=receipt_email,
            customer=on_behalf_of_organization if on_behalf_of_organization else user,
            setup_future_usage=setup_future_usage,
        )


donation_service = DonationService()
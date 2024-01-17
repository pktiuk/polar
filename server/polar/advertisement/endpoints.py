from uuid import UUID

import structlog
from fastapi import APIRouter, Depends, Query

from polar.auth.dependencies import UserRequiredAuth
from polar.kit.pagination import ListResource, Pagination
from polar.postgres import AsyncSession, get_db_session
from polar.tags.api import Tags

from .schemas import (
    AdvertisementCampaign,
    CreateAdvertisementCampaign,
)
from .service import advertisement_campaign_service

log = structlog.get_logger()

router = APIRouter(tags=["advertisements"])


@router.get(
    "/advertisements/campaigns/search",
    response_model=ListResource[AdvertisementCampaign],
    tags=[Tags.PUBLIC],
    status_code=200,
)
async def search_campaigns(
    auth: UserRequiredAuth,
    subscription_id: UUID = Query(None),
    session: AsyncSession = Depends(get_db_session),
) -> ListResource[AdvertisementCampaign]:
    ads = await advertisement_campaign_service.search(session, subscription_id)

    return ListResource(
        items=[AdvertisementCampaign.model_validate(ad) for ad in ads],
        pagination=Pagination(total_count=len(ads), max_page=1),
    )


@router.post(
    "/advertisements/campaigns",
    response_model=AdvertisementCampaign,
    tags=[Tags.PUBLIC],
    status_code=200,
)
async def create_campaign(
    create: CreateAdvertisementCampaign,
    auth: UserRequiredAuth,
    session: AsyncSession = Depends(get_db_session),
) -> AdvertisementCampaign:
    # TODO: authz

    created = await advertisement_campaign_service.create(session, create)
    return AdvertisementCampaign.model_validate(created)
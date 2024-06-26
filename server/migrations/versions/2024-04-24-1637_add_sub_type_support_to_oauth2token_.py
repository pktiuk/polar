"""Add sub_type support to OAuth2Token, OAuth2Grant and OAuth2AuthorizationCode

Revision ID: 0d7cc93bbf71
Revises: a53fe5ff63f1
Create Date: 2024-04-24 16:37:06.035362

"""

import sqlalchemy as sa
from alembic import op

# Polar Custom Imports
from polar.kit.extensions.sqlalchemy import PostgresUUID

# revision identifiers, used by Alembic.
revision = "0d7cc93bbf71"
down_revision = "a53fe5ff63f1"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "oauth2_authorization_codes", sa.Column("sub_type", sa.String(), nullable=False)
    )
    op.add_column(
        "oauth2_authorization_codes",
        sa.Column("organization_id", sa.UUID(), nullable=True),
    )
    op.alter_column(
        "oauth2_authorization_codes", "user_id", existing_type=sa.UUID(), nullable=True
    )
    op.create_foreign_key(
        op.f("oauth2_authorization_codes_organization_id_fkey"),
        "oauth2_authorization_codes",
        "organizations",
        ["organization_id"],
        ["id"],
        ondelete="cascade",
    )
    op.add_column(
        "oauth2_grants", sa.Column("organization_id", sa.UUID(), nullable=True)
    )
    op.alter_column("oauth2_grants", "user_id", existing_type=sa.UUID(), nullable=True)
    op.create_index(
        op.f("ix_oauth2_grants_organization_id"),
        "oauth2_grants",
        ["organization_id"],
        unique=False,
    )
    op.create_unique_constraint(
        op.f("oauth2_grants_client_id_organization_id_key"),
        "oauth2_grants",
        ["client_id", "organization_id"],
    )
    op.create_foreign_key(
        op.f("oauth2_grants_organization_id_fkey"),
        "oauth2_grants",
        "organizations",
        ["organization_id"],
        ["id"],
        ondelete="cascade",
    )
    op.add_column("oauth2_tokens", sa.Column("sub_type", sa.String(), nullable=False))
    op.add_column(
        "oauth2_tokens", sa.Column("organization_id", sa.UUID(), nullable=True)
    )
    op.alter_column("oauth2_tokens", "user_id", existing_type=sa.UUID(), nullable=True)
    op.create_foreign_key(
        op.f("oauth2_tokens_organization_id_fkey"),
        "oauth2_tokens",
        "organizations",
        ["organization_id"],
        ["id"],
        ondelete="cascade",
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        op.f("oauth2_tokens_organization_id_fkey"), "oauth2_tokens", type_="foreignkey"
    )
    op.alter_column("oauth2_tokens", "user_id", existing_type=sa.UUID(), nullable=False)
    op.drop_column("oauth2_tokens", "organization_id")
    op.drop_column("oauth2_tokens", "sub_type")
    op.drop_constraint(
        op.f("oauth2_grants_organization_id_fkey"), "oauth2_grants", type_="foreignkey"
    )
    op.drop_constraint(
        op.f("oauth2_grants_client_id_organization_id_key"),
        "oauth2_grants",
        type_="unique",
    )
    op.drop_index(op.f("ix_oauth2_grants_organization_id"), table_name="oauth2_grants")
    op.alter_column("oauth2_grants", "user_id", existing_type=sa.UUID(), nullable=False)
    op.drop_column("oauth2_grants", "organization_id")
    op.drop_constraint(
        op.f("oauth2_authorization_codes_organization_id_fkey"),
        "oauth2_authorization_codes",
        type_="foreignkey",
    )
    op.alter_column(
        "oauth2_authorization_codes", "user_id", existing_type=sa.UUID(), nullable=False
    )
    op.drop_column("oauth2_authorization_codes", "organization_id")
    op.drop_column("oauth2_authorization_codes", "sub_type")
    # ### end Alembic commands ###

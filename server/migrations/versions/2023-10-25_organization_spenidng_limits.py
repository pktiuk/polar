"""organization.spenidng_limits

Revision ID: 1969756c9810
Revises: 352d39e50178
Create Date: 2023-10-25 14:21:52.209672

"""

import sqlalchemy as sa
from alembic import op

# Polar Custom Imports
from polar.kit.extensions.sqlalchemy import PostgresUUID

# revision identifiers, used by Alembic.
revision = "1969756c9810"
down_revision = "352d39e50178"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "organizations",
        sa.Column("total_monthly_spending_limit", sa.Integer(), nullable=True),
    )
    op.add_column(
        "organizations",
        sa.Column("per_user_monthly_spending_limit", sa.Integer(), nullable=True),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("organizations", "per_user_monthly_spending_limit")
    op.drop_column("organizations", "total_monthly_spending_limit")
    # ### end Alembic commands ###

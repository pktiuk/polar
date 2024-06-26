"""issue/org/repo.indexes

Revision ID: a53fe5ff63f1
Revises: 49a4538ac616
Create Date: 2024-04-24 15:46:35.343372

"""

import sqlalchemy as sa
from alembic import op

# Polar Custom Imports
from polar.kit.extensions.sqlalchemy import PostgresUUID

# revision identifiers, used by Alembic.
revision = "a53fe5ff63f1"
down_revision = "49a4538ac616"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index(
        "idx_default_search",
        "issues",
        [
            "pledged_amount_sum",
            "last_pledged_at",
            "total_engagement_count",
            "created_at",
        ],
        unique=False,
    )
    op.create_index("idx_deleted_at", "organizations", ["deleted_at"], unique=False)
    op.create_index(
        "idx_deleted_at_is_private",
        "repositories",
        ["deleted_at", "is_private"],
        unique=False,
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index("idx_deleted_at_is_private", table_name="repositories")
    op.drop_index("idx_deleted_at", table_name="organizations")
    op.drop_index("idx_default_search", table_name="issues")
    # ### end Alembic commands ###

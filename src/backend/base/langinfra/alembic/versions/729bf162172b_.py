"""

Revision ID: 729bf162172b
Revises: e3162c1804e6
Create Date: 2024-12-09 02:45:48.171153

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel
from sqlalchemy.engine.reflection import Inspector
from langinfra.utils import migration


# revision identifiers, used by Alembic.
revision: str = '729bf162172b'
down_revision: Union[str, None] = 'e3162c1804e6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###

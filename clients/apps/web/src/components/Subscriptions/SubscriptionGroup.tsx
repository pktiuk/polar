import { Add } from '@mui/icons-material'
import { Organization, SubscriptionGroup } from '@polar-sh/sdk'
import Link from 'next/link'
import { Button } from 'polarkit/components/ui/button'
import SubscriptionGroupIcon from './SubscriptionGroupIcon'
import SubscriptionTierCard from './SubscriptionTierCard'

interface SubscriptionGroupProps {
  subscriptionGroup: SubscriptionGroup
  organization: Organization
}

const SubscriptionGroup: React.FC<SubscriptionGroupProps> = ({
  subscriptionGroup,
  organization,
}) => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="flex flex-row items-center text-2xl">
            <SubscriptionGroupIcon
              icon={subscriptionGroup.icon}
              color={subscriptionGroup.color}
            />
            <span className="dark:text-polar-50 ml-4">
              {subscriptionGroup.name}
            </span>
          </h2>
          <Link
            href={{
              pathname: `/maintainer/${organization.name}/subscriptions/tiers/new`,
              query: { subscription_group: subscriptionGroup.id },
            }}
          >
            <Button size="sm">
              <Add className="mr-2" fontSize="small" />
              New Tier
            </Button>
          </Link>
        </div>
        <p className="text-muted-foreground text-sm">
          {subscriptionGroup.description}
        </p>
      </div>
      <div className="grid auto-cols-[320px] grid-flow-col gap-8">
        {subscriptionGroup.tiers.map((tier) => (
          <Link
            key={tier.id}
            href={`/maintainer/${organization.name}/subscriptions/tiers/${tier.id}`}
          >
            <SubscriptionTierCard
              subscriptionGroup={subscriptionGroup}
              subscriptionTier={tier}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionGroup
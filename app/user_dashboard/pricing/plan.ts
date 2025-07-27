const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Callia",
      badge: null,
      popular: false,
      features: [
        { name: "10 scripts per month", included: true },
        { name: "Basic templates", included: true },
        { name: "Email support", included: true },
        { name: "Script analytics", included: false },
        { name: "Team collaboration", included: false },
        { name: "Custom templates", included: false },
        { name: "Priority support", included: false },
        { name: "API access", included: false },
        { name: "Advanced AI models", included: false }
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      buttonDisabled: true
    },
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Great for individual sales professionals",
      badge: "Most Popular",
      popular: true,
      features: [
        { name: "500 scripts per month", included: true },
        { name: "Advanced templates", included: true },
        { name: "Priority email support", included: true },
        { name: "Detailed analytics", included: true },
        { name: "Export scripts", included: true },
        { name: "Team collaboration", included: false },
        { name: "Custom templates", included: false },
        { name: "Phone support", included: false },
        { name: "API access", included: false }
      ],
      buttonText: "Upgrade to Starter",
      buttonVariant: "default" as const,
      buttonDisabled: false
    },
    {
      name: "Ultra",
      price: "$79",
      period: "per month",
      description: "Perfect for sales teams and agencies",
      badge: "Best Value",
      popular: false,
      features: [
        { name: "Unlimited scripts", included: true },
        { name: "All premium templates", included: true },
        { name: "24/7 phone & chat support", included: true },
        { name: "Advanced analytics & insights", included: true },
        { name: "Team collaboration", included: true },
        { name: "Custom template builder", included: true },
        { name: "API access", included: true },
        { name: "White-label options", included: true },
        { name: "Advanced AI models", included: true }
      ],
      buttonText: "Upgrade to Ultra",
      buttonVariant: "default" as const,
      buttonDisabled: false
    }
  ];
  export default plans
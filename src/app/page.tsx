"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Target, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Training",
          id: "#training",
        },
        {
          name: "Video",
          id: "#video",
        },
        {
          name: "Dashboard",
          id: "#dashboard",
        },
        {
          name: "Community",
          id: "#community",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
      ]}
      brandName="NextKick"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Train Smarter. Play Better."
      description="Unlock your elite potential with AI-driven training plans, professional match analysis, and a global football community."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-neodymium-magnet-phenomenon_23-2148253598.jpg?_wi=1",
          imageAlt: "Hero scene 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/out-focus-green-fiber-optics-lights_23-2148241269.jpg",
          imageAlt: "Hero scene 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sunset-football-field_23-2151952456.jpg",
          imageAlt: "Hero scene 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/stadium_1127-3575.jpg",
          imageAlt: "Hero scene 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tired-sportsman-with-ball-stadium_23-2147820650.jpg",
          imageAlt: "Hero scene 5",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-ferromagnetic-liquid-metal-with-copy-space_23-2148253629.jpg",
          imageAlt: "Hero scene 6",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/american-football-american-football-player-professional-sport-stadium_654080-414.jpg",
          imageAlt: "Hero scene 7",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sporty-girl-holding-soccer-ball-her-hands-girl-soccer-player-soccer-training-soccer_169016-67931.jpg",
          imageAlt: "Hero scene 8",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-close-up-ferromagnetic-metal_23-2148253626.jpg",
          imageAlt: "Hero scene 9",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-soccer-player-girl-sports-uniform-soccer-field-football-concept_169016-68375.jpg",
          imageAlt: "Hero scene 10",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-soccer-field_23-2150338694.jpg",
          imageAlt: "Hero scene 11",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-empty-football-stadium_23-2151569871.jpg",
          imageAlt: "Hero scene 12",
        },
      ]}
      buttons={[
        {
          text: "Start Training",
          href: "#pricing",
        },
        {
          text: "Watch Demo",
          href: "#video",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/abstract-blue-sunrise-fiber-glass-light_23-2148241338.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/abstract-green-bokeh-illuminated-background_23-2147873265.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/abstract-copy-space-background-with-spots_23-2148241218.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/green-abstract-fiber-glass-light_23-2148241345.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-empty-soccer-stadium-with-fantasy-dreamy-sky_23-2151563043.jpg",
          alt: "User 5",
        },
      ]}
      avatarText="Join 10,000+ elite athletes"
      marqueeItems={[
        {
          type: "text",
          text: "Precision Drills",
        },
        {
          type: "text",
          text: "Pro-Level Analytics",
        },
        {
          type: "text",
          text: "AI Training Paths",
        },
        {
          type: "text",
          text: "Global Scouting",
        },
        {
          type: "text",
          text: "Tactical Mastery",
        },
      ]}
    />
  </div>

  <div id="training" data-section="training">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Dribbling",
          description: "Master ball control with personalized drills.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-checking-summary-data-his-smartwatch_53876-102031.jpg",
        },
        {
          title: "Speed",
          description: "Explosive sprints and agility exercises.",
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-women-doing-sport-with-stats_23-2150040498.jpg",
        },
        {
          title: "Shooting",
          description: "Precision shooting techniques for every position.",
          imageSrc: "http://img.b2bpic.net/free-photo/artistic-background-wallpaper-with-color-halftone-effect_58702-9104.jpg",
        },
      ]}
      title="AI Training Planner"
      description="Get custom weekly plans based on your age, position, and skill level."
    />
  </div>

  <div id="video" data-section="video">
      <ProductCardFour
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Beginner Drills",
          price: "Access",
          variant: "Basic",
          imageSrc: "http://img.b2bpic.net/free-photo/older-woman-holding-smartphone-football-while-working-out-outdoors_23-2148771315.jpg",
        },
        {
          id: "2",
          name: "Pro Skills",
          price: "Premium",
          variant: "Advanced",
          imageSrc: "http://img.b2bpic.net/free-photo/influencer-talking-about-news-headlines-reading-from-chroma-key-laptop_482257-121769.jpg",
        },
        {
          id: "3",
          name: "Tactical Sessions",
          price: "Premium",
          variant: "Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-best-friends-playing-chess-video-call-coronavirus-quarantine-drinking-beer-eating-popcorn_482257-19637.jpg",
        },
        {
          id: "4",
          name: "Goalkeeper Drills",
          price: "Premium",
          variant: "Advanced",
          imageSrc: "http://img.b2bpic.net/free-photo/watching-football-concept-with-vr-glasses_23-2147813139.jpg",
        },
        {
          id: "5",
          name: "Strength Workouts",
          price: "Access",
          variant: "Basic",
          imageSrc: "http://img.b2bpic.net/free-photo/photographer-filming-content-discussing-about-software-used-perform-image-editing_482257-82250.jpg",
        },
        {
          id: "6",
          name: "Agility Drills",
          price: "Premium",
          variant: "Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/football-trainer-teaching-his-pupils_23-2149708008.jpg",
        },
      ]}
      title="Pro Training Library"
      description="Comprehensive video sessions from beginner drills to pro tactical setups."
    />
  </div>

  <div id="dashboard" data-section="dashboard">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15%",
          title: "Speed Gain",
          description: "Increase in sprint time",
          icon: Zap,
        },
        {
          id: "m2",
          value: "88%",
          title: "Accuracy",
          description: "Shooting precision improvement",
          icon: Target,
        },
        {
          id: "m3",
          value: "50+",
          title: "Sessions",
          description: "Completed training streaks",
          icon: TrendingUp,
        },
      ]}
      title="Performance Dashboard"
      description="Track your progress with advanced metrics and performance badges."
    />
  </div>

  <div id="analysis" data-section="analysis">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Professional ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/general-headquarters-monitoring-room-with-mockup-screen-tablet_482257-90086.jpg",
          alt: "Match Analysis",
        },
        {
          type: "text",
          content: " Match Analysis",
        },
      ]}
    />
  </div>

  <div id="community" data-section="community">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Great Platform",
          quote: "NextKick changed my game entirely.",
          name: "Sarah J.",
          role: "Player",
          imageSrc: "http://img.b2bpic.net/free-photo/drinking-professional-classy-thinking-computer-graphic_1134-1429.jpg",
        },
        {
          id: "t2",
          title: "Elite Support",
          quote: "Tactical analysis is unmatched.",
          name: "Michael C.",
          role: "Coach",
          imageSrc: "http://img.b2bpic.net/free-photo/supporters-watching-their-team-win-game-mobile-phone_53876-132396.jpg",
        },
        {
          id: "t3",
          title: "Love the Drills",
          quote: "Pro skills videos are incredibly clear.",
          name: "Emily R.",
          role: "Player",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-rugby-player-holding-ball-smartphone_23-2148793385.jpg",
        },
        {
          id: "t4",
          title: "Great Community",
          quote: "Shared my goal and got feedback fast.",
          name: "David K.",
          role: "Youth",
          imageSrc: "http://img.b2bpic.net/free-photo/two-men-looking-phone_23-2148264719.jpg",
        },
        {
          id: "t5",
          title: "Highly Recommended",
          quote: "Perfect for tactical understanding.",
          name: "James L.",
          role: "Player",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-taking-selfie_23-2149161246.jpg",
        },
      ]}
      title="Community Area"
      description="Connect with players, share clips, and climb the leaderboard."
    />
  </div>

  <div id="coaches" data-section="coaches">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "c1",
          name: "Coach Alex",
          role: "Tactical Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/football-trainer-teaching-kids-high-angle_23-2149742040.jpg",
        },
        {
          id: "c2",
          name: "Coach Sofia",
          role: "Speed Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/people-playing-basketball_23-2149231756.jpg",
        },
        {
          id: "c3",
          name: "Coach Marcus",
          role: "Goalkeeper Coach",
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961242.jpg",
        },
      ]}
      title="Coach Marketplace"
      description="Book 1-on-1 sessions with professional coaches."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          title: "Free Plan",
          price: "$0",
          period: "/mo",
          features: [
            "Basic drills",
            "Limited videos",
            "Basic tracking",
          ],
          button: {
            text: "Get Started",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/physical-activity-stats-around-person_23-2150163336.jpg",
          imageAlt: "football analytics dashboard stats",
        },
        {
          id: "pro",
          title: "Premium Plan",
          price: "$29",
          period: "/mo",
          features: [
            "AI Training Plans",
            "Advanced Analytics",
            "Exclusive Courses",
            "Live Coaching",
          ],
          button: {
            text: "Upgrade",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/green-neodymium-magnet-phenomenon_23-2148253598.jpg?_wi=2",
          imageAlt: "football analytics dashboard stats",
        },
      ]}
      title="Pricing Options"
      description="Choose the perfect plan to elevate your football career."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Join the Academy"
      description="Get in touch for custom camps or partnership inquiries."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/details-ball-sport_23-2151869799.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="NextKick Academy"
      copyrightText="© 2025 NextKick Academy | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

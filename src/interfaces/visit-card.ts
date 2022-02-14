export interface IVisitCard {
  id: string;
  userId: string;
  name: string;
  slug: string;
  shortBio: string;
  industry: string;
  logoUrl: string;
  address?: string;
  email?: string;
  showTestimonialButton: boolean;
  hideAhazouBanner: boolean;
  hideLeadCapture: boolean;

  background: string;
  testimonials: never[];
  slugs: never[];
  fields: never[];

  createdAt: string;
  updatedAt: string;

  persisted: boolean;
}

export type UserRole = 'customer' | 'tech' | 'admin';
export type JobType = 'remote' | 'in_person';
export type JobCategory = 'wifi' | 'printer' | 'pc_slow' | 'virus' | 'setup' | 'other';
export type JobStatus = 'requested' | 'offered' | 'accepted' | 'in_progress' | 'completed' | 'cancelled' | 'disputed';
export type OfferStatus = 'offered' | 'accepted' | 'declined' | 'expired';
export type AvailabilityStatus = 'offline' | 'available' | 'busy';
export type VerificationLevel = 'none' | 'id' | 'background' | 'fully_verified';
export type PaymentStatus = 'requires_payment' | 'paid' | 'refunded' | 'failed';

export interface Profile {
  id: string;
  role: UserRole;
  full_name: string | null;
  phone: string | null;
  email: string | null;
  created_at: string;
}

export interface TechProfile {
  tech_id: string;
  bio: string | null;
  skills: string[];
  service_radius_miles: number;
  base_lat: number | null;
  base_lng: number | null;
  hourly_rate: number;
  is_verified: boolean;
  verification_level: VerificationLevel;
  availability_status: AvailabilityStatus;
  avg_rating: number;
  jobs_completed: number;
}

export interface Job {
  id: string;
  customer_id: string;
  assigned_tech_id: string | null;
  job_type: JobType;
  category: JobCategory;
  description: string;
  address: string | null;
  job_lat: number | null;
  job_lng: number | null;
  scheduled_for: string | null;
  status: JobStatus;
  created_at: string;
  updated_at: string;
}

export interface JobOffer {
  id: string;
  job_id: string;
  tech_id: string;
  status: OfferStatus;
  created_at: string;
}

export interface JobEvent {
  id: string;
  job_id: string;
  actor_id: string | null;
  event_type: string;
  payload: Record<string, unknown>;
  created_at: string;
}

export interface JobMessage {
  id: string;
  job_id: string;
  sender_id: string | null;
  message: string;
  created_at: string;
}

export interface JobAttachment {
  id: string;
  job_id: string;
  uploader_id: string | null;
  storage_path: string;
  mime_type: string | null;
  created_at: string;
}

export interface Review {
  id: string;
  job_id: string;
  customer_id: string | null;
  tech_id: string | null;
  rating: number;
  comment: string | null;
  created_at: string;
}

export interface Payment {
  id: string;
  job_id: string;
  stripe_payment_intent_id: string | null;
  amount_total: number;
  platform_fee: number;
  tech_payout_amount: number;
  status: PaymentStatus;
  created_at: string;
}

export interface PayoutAccount {
  tech_id: string;
  stripe_connect_account_id: string | null;
  onboarding_status: string | null;
  created_at: string;
}

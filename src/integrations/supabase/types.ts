export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      article_duplicates: {
        Row: {
          detected_at: string
          duplicate_article_id: string
          id: string
          primary_article_id: string
          similarity_score: number
        }
        Insert: {
          detected_at?: string
          duplicate_article_id: string
          id?: string
          primary_article_id: string
          similarity_score: number
        }
        Update: {
          detected_at?: string
          duplicate_article_id?: string
          id?: string
          primary_article_id?: string
          similarity_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "article_duplicates_duplicate_article_id_fkey"
            columns: ["duplicate_article_id"]
            isOneToOne: false
            referencedRelation: "scraped_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_duplicates_primary_article_id_fkey"
            columns: ["primary_article_id"]
            isOneToOne: false
            referencedRelation: "scraped_articles"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          created_at: string
          deposit_paid_at: string | null
          device_type: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          payment_status: string
          phone: string | null
          preferred_date: string
          preferred_slot: string
          problem_description: string | null
          service_type: string
          status: string
          stripe_session_id: string | null
          tech_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          deposit_paid_at?: string | null
          device_type?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          payment_status?: string
          phone?: string | null
          preferred_date: string
          preferred_slot: string
          problem_description?: string | null
          service_type: string
          status?: string
          stripe_session_id?: string | null
          tech_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          deposit_paid_at?: string | null
          device_type?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          payment_status?: string
          phone?: string | null
          preferred_date?: string
          preferred_slot?: string
          problem_description?: string | null
          service_type?: string
          status?: string
          stripe_session_id?: string | null
          tech_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      content_categories: {
        Row: {
          icon: string | null
          id: string
          name: string
          parent_id: string | null
          slug: string
          sort_order: number
        }
        Insert: {
          icon?: string | null
          id?: string
          name: string
          parent_id?: string | null
          slug: string
          sort_order?: number
        }
        Update: {
          icon?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          slug?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "content_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "content_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      content_sources: {
        Row: {
          created_at: string
          domain: string
          feed_type: string
          feed_url: string | null
          id: string
          last_scraped_at: string | null
          logo_url: string | null
          name: string
          scrape_enabled: boolean
          scrape_frequency_hours: number
        }
        Insert: {
          created_at?: string
          domain: string
          feed_type?: string
          feed_url?: string | null
          id?: string
          last_scraped_at?: string | null
          logo_url?: string | null
          name: string
          scrape_enabled?: boolean
          scrape_frequency_hours?: number
        }
        Update: {
          created_at?: string
          domain?: string
          feed_type?: string
          feed_url?: string | null
          id?: string
          last_scraped_at?: string | null
          logo_url?: string | null
          name?: string
          scrape_enabled?: boolean
          scrape_frequency_hours?: number
        }
        Relationships: []
      }
      forum_replies: {
        Row: {
          author_name: string
          body: string
          created_at: string
          id: string
          thread_id: string
          user_id: string | null
        }
        Insert: {
          author_name?: string
          body: string
          created_at?: string
          id?: string
          thread_id: string
          user_id?: string | null
        }
        Update: {
          author_name?: string
          body?: string
          created_at?: string
          id?: string
          thread_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_replies_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_threads: {
        Row: {
          author_name: string
          body: string
          category: string
          created_at: string
          id: string
          reply_count: number
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          author_name?: string
          body: string
          category?: string
          created_at?: string
          id?: string
          reply_count?: number
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          author_name?: string
          body?: string
          category?: string
          created_at?: string
          id?: string
          reply_count?: number
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      guide_ratings: {
        Row: {
          anon_key: string | null
          created_at: string
          guide_slug: string
          id: string
          stars: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          anon_key?: string | null
          created_at?: string
          guide_slug: string
          id?: string
          stars: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          anon_key?: string | null
          created_at?: string
          guide_slug?: string
          id?: string
          stars?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      guide_videos: {
        Row: {
          guide_slug: string
          sort_order: number
          video_id: string
        }
        Insert: {
          guide_slug: string
          sort_order?: number
          video_id: string
        }
        Update: {
          guide_slug?: string
          sort_order?: number
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "guide_videos_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "video_tutorials"
            referencedColumns: ["id"]
          },
        ]
      }
      help_requests: {
        Row: {
          created_at: string
          device_type: string | null
          email: string | null
          id: string
          name: string | null
          phone: string | null
          problem_description: string | null
          status: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          device_type?: string | null
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          problem_description?: string | null
          status?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          device_type?: string | null
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          problem_description?: string | null
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          role: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          role?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string
        }
        Relationships: []
      }
      scam_reports: {
        Row: {
          created_at: string
          description: string
          id: string
          money_lost: string | null
          reporter_contact: string | null
          scam_email_address: string | null
          scam_phone: string | null
          scam_type: string
          scam_url: string | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          money_lost?: string | null
          reporter_contact?: string | null
          scam_email_address?: string | null
          scam_phone?: string | null
          scam_type: string
          scam_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          money_lost?: string | null
          reporter_contact?: string | null
          scam_email_address?: string | null
          scam_phone?: string | null
          scam_type?: string
          scam_url?: string | null
        }
        Relationships: []
      }
      scraped_articles: {
        Row: {
          category: string | null
          id: string
          original_author: string | null
          original_content: string
          original_published_at: string | null
          original_title: string
          original_url: string
          quality_score: number | null
          scrape_status: string
          scraped_at: string
          source_id: string
          tags: string[] | null
        }
        Insert: {
          category?: string | null
          id?: string
          original_author?: string | null
          original_content: string
          original_published_at?: string | null
          original_title: string
          original_url: string
          quality_score?: number | null
          scrape_status?: string
          scraped_at?: string
          source_id: string
          tags?: string[] | null
        }
        Update: {
          category?: string | null
          id?: string
          original_author?: string | null
          original_content?: string
          original_published_at?: string | null
          original_title?: string
          original_url?: string
          quality_score?: number | null
          scrape_status?: string
          scraped_at?: string
          source_id?: string
          tags?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "scraped_articles_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "content_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      simplified_articles: {
        Row: {
          created_at: string
          difficulty_level: string
          estimated_read_minutes: number
          id: string
          is_published: boolean
          published_at: string | null
          scraped_article_id: string
          simplified_content: string
          simplified_steps: Json | null
          simplified_title: string
          slug: string
          target_os: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          difficulty_level?: string
          estimated_read_minutes?: number
          id?: string
          is_published?: boolean
          published_at?: string | null
          scraped_article_id: string
          simplified_content: string
          simplified_steps?: Json | null
          simplified_title: string
          slug: string
          target_os?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          difficulty_level?: string
          estimated_read_minutes?: number
          id?: string
          is_published?: boolean
          published_at?: string | null
          scraped_article_id?: string
          simplified_content?: string
          simplified_steps?: Json | null
          simplified_title?: string
          slug?: string
          target_os?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "simplified_articles_scraped_article_id_fkey"
            columns: ["scraped_article_id"]
            isOneToOne: true
            referencedRelation: "scraped_articles"
            referencedColumns: ["id"]
          },
        ]
      }
      video_tutorials: {
        Row: {
          created_at: string
          description: string | null
          duration_seconds: number | null
          guide_slug: string
          id: string
          is_published: boolean
          os_type: Database["public"]["Enums"]["os_type"]
          os_version: string | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_seconds?: number | null
          guide_slug: string
          id?: string
          is_published?: boolean
          os_type: Database["public"]["Enums"]["os_type"]
          os_version?: string | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_seconds?: number | null
          guide_slug?: string
          id?: string
          is_published?: boolean
          os_type?: Database["public"]["Enums"]["os_type"]
          os_version?: string | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
    }
    Views: {
      guide_rating_stats: {
        Row: {
          avg_stars: number | null
          guide_slug: string | null
          rating_count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      os_type: "windows" | "macos" | "ios" | "android"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      os_type: ["windows", "macos", "ios", "android"],
    },
  },
} as const

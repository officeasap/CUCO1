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
      attendance: {
        Row: {
          created_at: string
          emergency_exception: boolean
          excused: boolean
          id: string
          mode: Database["public"]["Enums"]["attendance_mode"]
          session_id: string
          status: Database["public"]["Enums"]["attendance_status"]
          student_id: string
          updated_at: string
          weight: number
        }
        Insert: {
          created_at?: string
          emergency_exception?: boolean
          excused?: boolean
          id?: string
          mode: Database["public"]["Enums"]["attendance_mode"]
          session_id: string
          status?: Database["public"]["Enums"]["attendance_status"]
          student_id: string
          updated_at?: string
          weight: number
        }
        Update: {
          created_at?: string
          emergency_exception?: boolean
          excused?: boolean
          id?: string
          mode?: Database["public"]["Enums"]["attendance_mode"]
          session_id?: string
          status?: Database["public"]["Enums"]["attendance_status"]
          student_id?: string
          updated_at?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "attendance_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      certificates: {
        Row: {
          certificate_number: string
          created_at: string
          id: string
          issued_at: string
          program_id: string
          student_id: string
          verification_hash: string
        }
        Insert: {
          certificate_number: string
          created_at?: string
          id?: string
          issued_at?: string
          program_id: string
          student_id: string
          verification_hash: string
        }
        Update: {
          certificate_number?: string
          created_at?: string
          id?: string
          issued_at?: string
          program_id?: string
          student_id?: string
          verification_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      cohorts: {
        Row: {
          created_at: string
          end_date: string | null
          id: string
          name: string
          program_id: string
          start_date: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: string
          name: string
          program_id: string
          start_date?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: string
          name?: string
          program_id?: string
          start_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cohorts_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      deliverables: {
        Row: {
          created_at: string
          deliverable_type: string
          id: string
          recording_url: string | null
          script_id: string | null
          student_id: string
          submitted: boolean
          submitted_at: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          deliverable_type: string
          id?: string
          recording_url?: string | null
          script_id?: string | null
          student_id: string
          submitted?: boolean
          submitted_at?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          deliverable_type?: string
          id?: string
          recording_url?: string | null
          script_id?: string | null
          student_id?: string
          submitted?: boolean
          submitted_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "deliverables_script_id_fkey"
            columns: ["script_id"]
            isOneToOne: false
            referencedRelation: "scripts"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollments: {
        Row: {
          activated_at: string | null
          cohort_id: string | null
          completed_at: string | null
          created_at: string
          id: string
          program_id: string
          status: Database["public"]["Enums"]["enrollment_status"]
          track: Database["public"]["Enums"]["track_type"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          activated_at?: string | null
          cohort_id?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          program_id: string
          status?: Database["public"]["Enums"]["enrollment_status"]
          track?: Database["public"]["Enums"]["track_type"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          activated_at?: string | null
          cohort_id?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          program_id?: string
          status?: Database["public"]["Enums"]["enrollment_status"]
          track?: Database["public"]["Enums"]["track_type"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_cohort_id_fkey"
            columns: ["cohort_id"]
            isOneToOne: false
            referencedRelation: "cohorts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string
          enrollment_id: string | null
          id: string
          provider: Database["public"]["Enums"]["payment_provider"]
          provider_reference: string | null
          reference: string | null
          status: Database["public"]["Enums"]["payment_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency: string
          enrollment_id?: string | null
          id?: string
          provider: Database["public"]["Enums"]["payment_provider"]
          provider_reference?: string | null
          reference?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          enrollment_id?: string | null
          id?: string
          provider?: Database["public"]["Enums"]["payment_provider"]
          provider_reference?: string | null
          reference?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          role: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      program_instructors: {
        Row: {
          created_at: string
          id: string
          instructor_id: string
          program_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          instructor_id: string
          program_id: string
        }
        Update: {
          created_at?: string
          id?: string
          instructor_id?: string
          program_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_instructors_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          created_at: string
          description: string | null
          id: string
          slug: string
          status: Database["public"]["Enums"]["program_status"]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          slug: string
          status?: Database["public"]["Enums"]["program_status"]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          slug?: string
          status?: Database["public"]["Enums"]["program_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          answer: string | null
          answered_at: string | null
          cohort_id: string | null
          created_at: string
          id: string
          program_id: string | null
          question: string
          student_id: string
          updated_at: string
          upvotes: number
        }
        Insert: {
          answer?: string | null
          answered_at?: string | null
          cohort_id?: string | null
          created_at?: string
          id?: string
          program_id?: string | null
          question: string
          student_id: string
          updated_at?: string
          upvotes?: number
        }
        Update: {
          answer?: string | null
          answered_at?: string | null
          cohort_id?: string | null
          created_at?: string
          id?: string
          program_id?: string | null
          question?: string
          student_id?: string
          updated_at?: string
          upvotes?: number
        }
        Relationships: [
          {
            foreignKeyName: "questions_cohort_id_fkey"
            columns: ["cohort_id"]
            isOneToOne: false
            referencedRelation: "cohorts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "questions_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      receipts: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          issued_at: string
          payment_id: string
          receipt_hash: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency: string
          id?: string
          issued_at?: string
          payment_id: string
          receipt_hash: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          issued_at?: string
          payment_id?: string
          receipt_hash?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receipts_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      scores: {
        Row: {
          category: string
          created_at: string
          id: string
          score: number
          session_id: string | null
          student_id: string
          updated_at: string
          weight: number
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          score: number
          session_id?: string | null
          student_id: string
          updated_at?: string
          weight?: number
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          score?: number
          session_id?: string | null
          student_id?: string
          updated_at?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "scores_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      script_roles: {
        Row: {
          created_at: string
          id: string
          role_name: string
          script_id: string
          student_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role_name: string
          script_id: string
          student_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role_name?: string
          script_id?: string
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "script_roles_script_id_fkey"
            columns: ["script_id"]
            isOneToOne: false
            referencedRelation: "scripts"
            referencedColumns: ["id"]
          },
        ]
      }
      scripts: {
        Row: {
          content: string | null
          created_at: string
          id: string
          program_id: string | null
          title: string
          updated_at: string
          version: number
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          program_id?: string | null
          title: string
          updated_at?: string
          version?: number
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          program_id?: string | null
          title?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "scripts_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          cohort_id: string | null
          created_at: string
          description: string | null
          ends_at: string | null
          id: string
          program_id: string
          recording_url: string | null
          starts_at: string
          title: string
          updated_at: string
          zoom_session_id: string | null
          zoom_session_name: string | null
        }
        Insert: {
          cohort_id?: string | null
          created_at?: string
          description?: string | null
          ends_at?: string | null
          id?: string
          program_id: string
          recording_url?: string | null
          starts_at: string
          title: string
          updated_at?: string
          zoom_session_id?: string | null
          zoom_session_name?: string | null
        }
        Update: {
          cohort_id?: string | null
          created_at?: string
          description?: string | null
          ends_at?: string | null
          id?: string
          program_id?: string
          recording_url?: string | null
          starts_at?: string
          title?: string
          updated_at?: string
          zoom_session_id?: string | null
          zoom_session_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_cohort_id_fkey"
            columns: ["cohort_id"]
            isOneToOne: false
            referencedRelation: "cohorts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      tutor_notifications: {
        Row: {
          acknowledged_at: string | null
          created_at: string
          enrollment_id: string | null
          id: string
          message: string | null
          payment_id: string | null
          status: Database["public"]["Enums"]["notification_status"]
          student_id: string
          tutor_id: string
        }
        Insert: {
          acknowledged_at?: string | null
          created_at?: string
          enrollment_id?: string | null
          id?: string
          message?: string | null
          payment_id?: string | null
          status?: Database["public"]["Enums"]["notification_status"]
          student_id: string
          tutor_id: string
        }
        Update: {
          acknowledged_at?: string | null
          created_at?: string
          enrollment_id?: string | null
          id?: string
          message?: string | null
          payment_id?: string | null
          status?: Database["public"]["Enums"]["notification_status"]
          student_id?: string
          tutor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tutor_notifications_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tutor_notifications_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      attendance_mode: "parallel" | "collaboration" | "convergence"
      attendance_status: "green" | "yellow" | "red" | "withdrawn"
      enrollment_status:
        | "pending"
        | "active"
        | "warning"
        | "withdrawn"
        | "completed"
      notification_status: "delivered" | "acknowledged"
      payment_provider: "stripe" | "crypto"
      payment_status:
        | "pending"
        | "processing"
        | "completed"
        | "failed"
        | "expired"
        | "cancelled"
      program_status: "draft" | "published" | "archived"
      track_type: "writer" | "director" | "actor"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
      attendance_mode: ["parallel", "collaboration", "convergence"],
      attendance_status: ["green", "yellow", "red", "withdrawn"],
      enrollment_status: [
        "pending",
        "active",
        "warning",
        "withdrawn",
        "completed",
      ],
      notification_status: ["delivered", "acknowledged"],
      payment_provider: ["stripe", "crypto"],
      payment_status: [
        "pending",
        "processing",
        "completed",
        "failed",
        "expired",
        "cancelled",
      ],
      program_status: ["draft", "published", "archived"],
      track_type: ["writer", "director", "actor"],
    },
  },
} as const

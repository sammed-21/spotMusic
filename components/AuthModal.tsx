"use client";
import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

type Props = {};

const AuthModal = (props: Props) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();
  useEffect(() => {
    if (session) {
      router.refresh();
      console.log(session);
      onClose();
    }
  }, [session, router, onClose]);
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <div>
      <Modal
        title="welcome back"
        description="login to your accound"
        isOpen={isOpen}
        onChange={onChange}
      >
        <Auth
          theme="dark"
          providers={["github"]}
          magicLink
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
          supabaseClient={supabaseClient}
        />
      </Modal>
    </div>
  );
};

export default AuthModal;

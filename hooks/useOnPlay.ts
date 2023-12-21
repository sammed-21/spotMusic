import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
// import { useUser } from "@supabase/auth-helpers-react";
import { useUser } from "./useUser";
import useSubscripeModal from "./useSubscribeModal";
const useOnPlay = (songs: Song[]) => {
    const subscribe = useSubscripeModal();
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user,subscription } = useUser();

    const onPlay = (id: string) => {

        if (!user) {
            return authModal.onOpen()
        }
        if (!subscription) {
            return subscribe.onOpen()
        }
        player.setId(id);
        player.setIds(songs.map(song => song.id))
    }
    return onPlay;
}
export default useOnPlay;
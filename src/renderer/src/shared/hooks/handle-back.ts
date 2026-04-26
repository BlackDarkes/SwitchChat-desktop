import { useMobileMessages } from "@/features/mobile-messages";
import { useNavigate } from "react-router";

export const useHandleBack = (): { handleBack: () => void } => {
	const { handleOpen } = useMobileMessages();
	const navigate = useNavigate();

	const handleBack = (): void => {
		handleOpen(false);
		navigate("/");
	};

	return {
		handleBack,
	};
};

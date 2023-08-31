import AvatarMax from "../assets/images/avatar-mark-webber.webp";
import AvatarAngela from "../assets/images/avatar-angela-gray.webp";
import AvatarJacob from "../assets/images/avatar-jacob-thompson.webp";
import AvatarRizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import AvatarKimberly from "../assets/images/avatar-kimberly-smith.webp";
import AvatarNathan from "../assets/images/avatar-nathan-peterson.webp";
import AvatarAnna from "../assets/images/avatar-anna-kim.webp";
import ChessePhoto from "../assets/images/image-chess.webp";

const notificationData = [
  {
    avatar: AvatarMax,
    userName: "Mark Webber",
    action: "reacted to your recent post",
    message: "My first tournament today!",
    timeAgo: "1m ago",
    isUnread: true,
  },
  {
    avatar: AvatarAngela,
    userName: "Angela Gray",
    action: "followed you",
    message: "",
    timeAgo: "5m ago",
    isUnread: true,
  },
  {
    avatar: AvatarJacob,
    userName: "Jacob Thompson",
    action: "has joined your group",
    message: "",
    timeAgo: "1 day ago",
    isUnread: true,
    group: "Chess Club"
  },
  {
    avatar: AvatarRizky,
    userName: "Rizky Hasanuddin",
    action: "sent you a private message",
    message: "",
    timeAgo: "5 days ago",
    isUnread: false,
    privateMessage: true,
  },
  {
    avatar: AvatarKimberly,
    userName: "Kimberly Smith",
    action: "commented on your picture",
    message: " ",
    timeAgo: "1 week ago",
    isUnread: false,
    photo: ChessePhoto,
  },
  {
    avatar: AvatarNathan,
    userName: "Nathan Peterson",
    action: "reacted to your recent post",
    message: "5 end-game strategies to increase your win rate",
    timeAgo: "2 week ago",
    isUnread: false,
  },
  {
    avatar: AvatarAnna,
    userName: "Anna Kim",
    action: "left the group",
    message: "",
    timeAgo: "2 weeks ago",
    isUnread: false,
    group: "Chess Club"
  },
];

export default notificationData;

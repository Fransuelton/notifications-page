import { styled } from "styled-components"
import { HeaderArea } from "../HeaderArea"
import AvatarMax from '../../assets/images/avatar-mark-webber.webp'
import AvatarAngela from '../../assets/images/avatar-angela-gray.webp'
import AvatarJacob from '../../assets/images/avatar-jacob-thompson.webp'
import AvatarRizky from '../../assets/images/avatar-rizky-hasanuddin.webp'
import AvatarKimberly from '../../assets/images/avatar-kimberly-smith.webp'
import AvatarNathan from '../../assets/images/avatar-nathan-peterson.webp'
import AvatarAnna from '../../assets/images/avatar-anna-kim.webp'
import ChessePhoto from '../../assets/images/image-chess.webp'

const NotificationArea = () => {
    return (
        <NotificationsList>
            <HeaderArea />
            <Section>
                <Img src={AvatarMax} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Mark Webberr</UserName> reacted to your recent post <ReactedNotification>My first tournament today!<Unread /></ReactedNotification>
                    </Description>

                    <NotificationTime>1m ago</NotificationTime>
                </Info>
            </Section>

            <Section>
                <Img src={AvatarAngela} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Angela Gray</UserName> followed you<Unread />
                    </Description>

                    <NotificationTime>5m ago</NotificationTime>
                </Info>
            </Section>

            <Section>
                <Img src={AvatarJacob} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Jacob Thompson</UserName> has joined your group <GroupNotification>Chess Club</GroupNotification><Unread />
                    </Description>

                    <NotificationTime>1 day ago</NotificationTime>
                </Info>
            </Section>

            <Section>
                <Img src={AvatarRizky} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Rizky Hasanuddin</UserName> sent you a private message
                    </Description>

                    <NotificationTime>5 days ago</NotificationTime>

                    
                    <PrivateMessage>Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.</PrivateMessage>
                </Info>
            </Section>

            <Section>
                <Img src={AvatarKimberly} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Kimberly Smith</UserName> commented on your picture
                    </Description>

                    <NotificationTime>1 week ago</NotificationTime>
                </Info>
                <ChesseImg src={ChessePhoto} alt="Foto de uma menina jogando xadrez" />
            </Section>

            <Section>
                <Img src={AvatarNathan} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Nathan Peterson</UserName> reacted to your recent post <ReactedNotification>5 end-game strategies to increase your win rate</ReactedNotification>
                    </Description>

                    <NotificationTime>2 weeks ago</NotificationTime>
                </Info>
            </Section>

            <Section>
                <Img src={AvatarAnna} alt="Foto de Perfil" />
                <Info>
                    <Description>
                        <UserName>Anna Kim</UserName> left the group <GroupNotification>Chess Club</GroupNotification>
                    </Description>

                    <NotificationTime>2 weeks ago</NotificationTime>
                </Info>
            </Section>
        </NotificationsList>
    );
}

const NotificationsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 1.6rem 4rem 1.6rem;
`

const Section = styled.section`
    display: flex;
    background-color: #F7FAFD;
    min-width: 34.3rem;
    max-width: 67rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
    gap: 1rem;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items-center;
`

const Img = styled.img`
    width: 3.9rem;
    height: 3.9rem;
    border-radius: 3.9rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    margin-right: 1.3rem;

    @media (min-width: 1200px) and (max-width: 1919px) {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 4.5rem;
    }
`

const ChesseImg = styled.img`
    cursor: pointer;
    width: 3.9rem;
    height: 3.9rem;
    border-radius: 0.7rem;

    @media (min-width: 1200px) and (max-width: 1919px) {
        width: 4.5rem;
        height: 4.5rem;
        margin-left: 17rem;
    }
`

const UserName = styled.span`
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 800;
    color: #1C202B;
    margin-right: 0.6rem;

    &:hover {
        color: #0A327B;
    }

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 1.6rem;
    }
`

const Description = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: #5E6778;
    margin-bottom: 0.3rem;

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 1.6rem;
        margin-bottom: 0.4rem
    }
`

const NotificationTime = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: #939CAD;

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 1.6rem;
    }
`

const GroupNotification = styled.span`
    cursor: pointer;
    color: #0A327B;
    font-size: 14px;
    font-weight: 700;

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 1.6rem;
    }
`

const ReactedNotification = styled.span`
    cursor: pointer;
    color: #5E6778;
    font-size: 14px;
    font-weight: 700;

    &:hover {
        color: #0A327B;
    }

    @media (min-width: 1200px) and (max-width: 1919px) {
        font-size: 1.6rem;
        font-weight: 800;
    }
`

const Unread = styled.span`
    width: 8px;
    height: 8px;
    background-color: #F65552;
    border-radius: 50%;
    display: inline-block;
    margin-left: 0.6rem;
`

const PrivateMessage = styled.p`
    cursor: pointer;
    color: #5E6778;
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    font-weight: 500;
    width: clamp(26.3rem, 4vw, 56.6rem)
    height: 122px;
    border-radius: 5px;
    border: 1px solid #DDE7EE;
    background: #FFF;
    padding: 1.6rem;
    margin-top: 1.2rem;

    &:hover{
        border: 1px solid var(--7-very-light-grey-blue, #DDE7EE);
        background: var(--6-light-grey-blue, #E5EFFA);
    }
`

export { NotificationArea }
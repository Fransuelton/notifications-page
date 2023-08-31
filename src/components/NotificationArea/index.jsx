import React, { useState } from "react";
import { styled } from "styled-components";
import { HeaderArea } from "../HeaderArea";
import notificationData from "../../data/notificationsData";

const NotificationArea = () => {
  const [unreadVisible, setUnreadVisible] = useState(true);
  const [messageCount, setMessageCount] = useState(3);

  const handleUnreadClick = () => {
    setUnreadVisible(false);
    setMessageCount(0);
  };

  return (
    <NotificationsList>
      <HeaderArea
        handleUnreadClick={handleUnreadClick}
        messageCount={messageCount}
      />

      {notificationData.map((data, index) => (
        <Section key={index}>
          <Img src={data.avatar} alt="Foto de Perfil" />

          <Info>
            <Description>
              <UserName>{data.userName}</UserName>{" "}

              {data.action && <span>{data.action}</span>}{" "}

              <ReactedNotification>
                {data.message && <span>{data.message}</span>}
                {data.group && (
                  <GroupNotification>{data.group}</GroupNotification>
                )}
                {data.isUnread && unreadVisible && <Unread />}
              </ReactedNotification>
            </Description>

            <NotificationTime>{data.timeAgo}</NotificationTime>

            {data.privateMessage && (
              <PrivateMessage>
                Hello, thanks for setting up the Chess Club. I’ve been a member
                for a few weeks now and I’m already having lots of fun and
                improving my game.
              </PrivateMessage>
            )}
          </Info>
          {data.photo && (
              <ChesseImg
                src={data.photo}
                alt="Foto de uma menina jogando xadrez"
              />
            )}
        </Section>
      ))}
    </NotificationsList>
  );
};

const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.6rem 4rem 1.6rem;
`;

const Section = styled.section`
  display: flex;
  background-color: #f7fafd;
  min-width: 34.3rem;
  max-width: 67rem;
  padding: 1.6rem;
  border-radius: 0.8rem;
  gap: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items-center;
`;

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
`;

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
`;

const UserName = styled.span`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 800;
  color: #1c202b;
  margin-right: 0.6rem;

  &:hover {
    color: #0a327b;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.6rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #5e6778;
  margin-bottom: 0.3rem;

  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;

const NotificationTime = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #939cad;

  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.6rem;
  }
`;

const GroupNotification = styled.span`
  cursor: pointer;
  color: #0a327b;
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.6rem;
  }
`;

const ReactedNotification = styled.span`
  cursor: pointer;
  color: #5e6778;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: #0a327b;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.6rem;
    font-weight: 800;
  }
`;

const Unread = styled.span`
  width: 8px;
  height: 8px;
  background-color: #f65552;
  border-radius: 50%;
  display: inline-block;
  margin-left: 0.6rem;
`;

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
`;

export { NotificationArea };

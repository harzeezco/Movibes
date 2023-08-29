import { styled } from 'styled-components';

const NotificationBoxStyles = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--color-dark-secondary);
`;

const Notification = () => {
  return (
    <NotificationBoxStyles>
      <span>
        <ion-icon name="notifications-outline"></ion-icon>
      </span>
    </NotificationBoxStyles>
  );
};

export default Notification;

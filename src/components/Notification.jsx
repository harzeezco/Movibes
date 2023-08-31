import { styled } from 'styled-components';

const NotificationStyles = styled.div`
  font-size: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: var(--border-radius-rounded);
  background-color: var(--color-dark-secondary);
  color: #fff;
`;

const Notification = () => {
  return (
    <NotificationStyles className="center">
      <span>
        <ion-icon name="notifications-outline"></ion-icon>
      </span>
    </NotificationStyles>
  );
};

export default Notification;

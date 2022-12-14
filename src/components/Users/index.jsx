import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({
  items,
  isLoading,
  onClickInvite,
  invites,
  onClickSuccess,
  searchValue,
  onChangeSearch,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={(event) => onChangeSearch(event)}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          {items.map((obj) => (
            <Skeleton />
          ))}
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter(
              (obj) =>
                obj.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                obj.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((obj) => (
              <User item={obj} onClickInvite={onClickInvite} invites={invites} key={obj.id} />
            ))}
        </ul>
      )}
      {invites.length > 0 && (
        <button className="send-invite-btn" onClick={onClickSuccess}>
          Отправить приглашение
        </button>
      )}
    </>
  );
};

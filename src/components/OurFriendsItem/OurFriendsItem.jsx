import {
  FriendsItem,
  FriendsMainLink,
  FriendsInfoBox,
  FriendsLogo,
  FriendsInfoList,
  FriendsInfoItem,
  TimeBtn,
  FriendsInfoLink,
  TimeList,
  FriendsAddressLink,
  TimeSpan,
} from './OurFriendItem.styled';

import AllianceLogoHoriz from '../../images/AllianceLogoHoriz.png';

import { useState } from 'react';
import { OurFriendTime } from './OurFriendTime';

const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'ST', 'SU'];

export const OurFriendItem = ({ id, partners }) => {
  const [showTime, setShowTime] = useState(false);

  const toggleTime = evt => {
    setShowTime(showTime => !showTime);
    if (!showTime) {
      evt.currentTarget.style.color = '#f59256';
    }
    if (showTime) {
      evt.currentTarget.style.color = '#000000';
    }
    };

  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    partners;


  const get = () => {
    if (!workDays || workDays.length === 0) {
      const message = 'Find us online';
      return [message];
    }

    return days.map((day, index) => {
      if (workDays[index]?.isOpen) {
        return {
          day,
          isOpen: workDays[index].isOpen,
          from: workDays[index].from,
          to: workDays[index].to,
        };
      }
      return { day, isOpen: workDays[index].isOpen };
    });
  };

  const workTime = get();
  return (
    <FriendsItem key={id}>
      <h2>
        <FriendsMainLink
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </FriendsMainLink>
      </h2>
      <FriendsInfoBox>
        <FriendsLogo
          src={imageUrl ? imageUrl : { AllianceLogoHoriz }}
          alt="friendLogo"
        />
        <FriendsInfoList>
          <FriendsInfoItem
            style={{ display: 'block' }}
            onClick={evt => toggleTime(evt)}
          >
            <TimeBtn whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <TimeSpan> Time</TimeSpan>
              {workDays && workDays.length !== 0
                ? (workDays[0].isOpen &&
                    `${workDays[0].from}-${workDays[0].to}`) ||
                  (!workDays[0].isOpen &&
                    `${workDays[6].from}-${workDays[6].to}`)
                : '---------'}
            </TimeBtn>
          </FriendsInfoItem>
          <FriendsInfoItem>Address:</FriendsInfoItem>
          <FriendsInfoItem>
            {address ? (
              <FriendsAddressLink
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={addressUrl}
                target="_blank"
                rel="noreferrer"
              >
                {address}
              </FriendsAddressLink>
            ) : (
              <p>---------</p>
            )}
          </FriendsInfoItem>
          <FriendsInfoItem>Email:</FriendsInfoItem>
          <FriendsInfoItem>
            {email ? (
              <FriendsInfoLink
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${email}`}
              >
                {email}
              </FriendsInfoLink>
            ) : (
              <p>---------</p>
            )}
          </FriendsInfoItem>
          <FriendsInfoItem>Phone:</FriendsInfoItem>
          <FriendsInfoItem>
            {phone ? (
              <FriendsInfoLink
                whileHover={{ scale:  1.1  }}
                whileTap={{ scale:  0.9 }}
                href={`tel:${phone}`}
              >
                {phone}
              </FriendsInfoLink>
            ) : (
              <p>---------</p>
            )}
          </FriendsInfoItem>
        </FriendsInfoList>

        {showTime && (
          <TimeList
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {workTime.map(time => {
              return <OurFriendTime key={time.day || '1'} days={time} />;
            })}
          </TimeList>
        )}
      </FriendsInfoBox>
    </FriendsItem>
  );
};

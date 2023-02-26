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
} from './OurFriendItem.styled';

import AllianceLogoHoriz from '../../images/AllianceLogoHoriz.png';
import { OurFriendTime } from './OurFriendTime';
import { useEffect } from 'react';
import { useState } from 'react';

const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'ST', 'SU'];

export const OurFriendItem = ({ partners }) => {
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
          setShowTime(false);
          const timeLabels = document.querySelectorAll("#timeBtn")
          timeLabels.forEach(label => label.style.color = '#000000')
          }
      };

      const onBackdropClick = evt => {
            // if (evt.target === evt.currentTarget) {
            //     setShowTime(false)
            // }
    }
      window.addEventListener("click", onBackdropClick)
      window.addEventListener('keydown', onCloseByEscape);

    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [setShowTime]);

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
    <FriendsItem>
      <h2>
        <FriendsMainLink href={url} target="_blank" rel="noreferrer">
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
                id="timeBtn"
                style={{ display: 'block', cursor: 'pointer' }}
                onClick={evt => toggleTime(evt)}
          >
            <TimeBtn type="button">Time</TimeBtn>
            {workDays && workDays.length !== 0
              ? (workDays[0].isOpen &&
                  `${workDays[0].from}-${workDays[0].to}`) ||
                (!workDays[0].isOpen && `${workDays[6].from}-${workDays[6].to}`)
              : '---------'}
          </FriendsInfoItem>
          <FriendsInfoItem>Address:</FriendsInfoItem>
          <FriendsInfoItem>
            <FriendsAddressLink
              href={addressUrl}
              target="_blank"
              rel="noreferrer"
            >
              {address ? address : '---------'}
            </FriendsAddressLink>
          </FriendsInfoItem>
          <FriendsInfoItem>Email:</FriendsInfoItem>
          <FriendsInfoItem>
            <FriendsInfoLink href={`mailto:${email}`}>
              {email ? email : '---------'}
            </FriendsInfoLink>
          </FriendsInfoItem>
          <FriendsInfoItem>Phone:</FriendsInfoItem>
          <FriendsInfoItem>
            <FriendsInfoLink href={`tel:${phone}`}>
              {phone ? phone : '---------'}
            </FriendsInfoLink>
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

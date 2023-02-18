import { Item, ItemTitle, Text, ItemDate, Link, Gradient, BottomContainer } from './NewsItem.styled';

export const NewsItem = ({ title, description, date, url }) => {

  return (
    <Item>
      <Gradient></Gradient>
      <ItemTitle>{title}</ItemTitle>
      <Text>{description}</Text>
      <BottomContainer>
        <ItemDate>{date}</ItemDate>
        <Link
          href={url}
          target="_blank"
        >
          Read more
        </Link>
      </BottomContainer>
    </Item>
  )
};
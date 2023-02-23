import { Oval } from 'react-loader-spinner';

export const UpdatingLoader = ({width = 40, height = 40}) => {
  return (
    <Oval
      height={height}
      width={width}
      color="#F59256"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#F59256"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

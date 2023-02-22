import { Box } from 'components/Box';
import { useDimensions } from 'helpers/useDimensions';
import { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/notices-operations';
import {
  ActionButton,
  CommentInput,
  Error,
  FileIcon,
  FileLabel,
  ImgFile,
  Input,
  InputEnter,
  LabelContainer,
  LabelTitle,
  Lable,
  SexIcons,
  SexIconsMale,
  SexInput,
  SexLabel,
  SexTitle,
  Title,
  Warning,
} from './AddNoticeModal.styled';

export const AddNoticeModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [choosedCategory, setChoosedCategory] = useState('lost-found');
  const [rows, setRows] = useState(1);
  const [commentVal, setCommentVal] = useState('');
  const [nextPage, setNextpage] = useState(false);
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onChange = e => {
    setChoosedCategory(e.target.value);
  };

  const onChangeTextArea = e => {
    const { value } = e.target;
    const { inputType } = e.nativeEvent;
    const inputRows = value.split('\n').length;
    setRows(inputRows);
    const rowNumber = width > 400 ? 50 : 20;
    if (value.length % rowNumber === 0 && inputType === 'insertText') {
      setCommentVal(prev => prev + '\n');
      return;
    }
    setCommentVal(value);
  };

  const onChangePage = () => {
    const { title, name } = watch();
    if (!title || !name) {
      setError(title === '' ? 'title' : 'name');
      return;
    }
    setNextpage(true);
  };
  const onFormSubmit = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'noticeAvatar') {
        formData.append(key, data[key][0]);
        return;
      }
      formData.append(key, data[key]);
    });
    formData.append('comments', commentVal);
    dispatch(addNotice(formData));
    setShowModal(false)
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} ref={containerRef}>
      <Title>Add Pet</Title>
      {!nextPage ? (
        <>
          <Warning>
            All fields with star (
            <Warning as="span" color="red">
              *
            </Warning>
            ) are required
          </Warning>
          <Box
            gridGap="8px"
            display="inline-flex"
            flexWrap="wrap"
            mb={['32px']}
          >
            <Input
              type="radio"
              name="category"
              value="lost-found"
              id="lost-found"
              onChange={onChange}
              {...register('category')}
              defaultChecked
            />
            <Lable htmlFor="lost-found">lost/found </Lable>

            <Input
              type="radio"
              name="category"
              value="in-good-hands"
              onChange={onChange}
              id="in-good-hands"
              {...register('category')}
            />
            <Lable htmlFor="in-good-hands">in good hands </Lable>

            <Input
              type="radio"
              name="category"
              value="sell"
              id="sell"
              {...register('category')}
              onChange={onChange}
            />
            <Lable htmlFor="sell">sell </Lable>
          </Box>
          <LabelContainer>
            {' '}
            <LabelTitle>
              Tittle of ad
              <Warning as="span" color="red">
                *
              </Warning>
              <InputEnter
                type="text"
                placeholder="Enter the title"
                {...register('title', { required: 'Title is required' })}
              />
            </LabelTitle>
            {errors?.title?.message && <Error>{errors.title.message}</Error>}
          </LabelContainer>
          <LabelContainer>
            <LabelTitle>
              Name pet{' '}
              <Warning as="span" color="red">
                *
              </Warning>
              <InputEnter
                type="text"
                placeholder="Enter the name"
                {...register('name', { required: 'Name is required' })}
              />
            </LabelTitle>
            {errors?.name?.message && <Error>{errors.name.message}</Error>}
          </LabelContainer>

          <LabelTitle>
            Date of birth
            <InputEnter
              type="text"
              placeholder="Enter the birthday"
              {...register('birthdate', { required: 'birthdate is required' })}
            />
          </LabelTitle>
          <LabelTitle mb={['40px', '40px']}>
            Breed
            <InputEnter
              type="text"
              placeholder="Enter the breed"
              {...register('breed')}
            />
          </LabelTitle>
          <Box display={[null, 'flex']}>
            <ActionButton
              mb={['12px', '0px']}
              order={[null, '1']}
              onClick={onChangePage}
            >
              Next
            </ActionButton>
            <ActionButton
              bg="white"
              color="black"
              mr={[null, '12px']}
              onClick={() => setShowModal(false)}
            >
              Cancel
            </ActionButton>
          </Box>
        </>
      ) : (
        <>
          <SexTitle>
            The sex
            <Warning as="span" color="red">
              *
            </Warning>
            :
          </SexTitle>
          <LabelContainer mb={['32px']}>
            <Box display="flex" alignItems="flex-end">
              <Box mr="20px">
                <SexInput
                  type="radio"
                  name="sex"
                  value="male"
                  id="male"
                  {...register('sex', { required: 'Choose animal sex' })}
                />

                <SexLabel htmlFor="male">
                  <SexIconsMale />
                  <span>male</span>
                </SexLabel>
              </Box>
              <Box>
                <SexInput
                  type="radio"
                  name="sex"
                  value="female"
                  id="female"
                  {...register('sex', { required: 'Choose animal sex' })}
                />
                <SexLabel htmlFor="female">
                  <SexIcons />
                  <span>female</span>
                </SexLabel>
              </Box>
            </Box>
            {errors?.sex?.message && <Error>{errors.sex.message}</Error>}
          </LabelContainer>
          <LabelTitle mb={['20px']}>
            Location
            <Warning as="span" color="red">
              *
            </Warning>
            :
            <InputEnter
              name="location"
              placeholder="Sumy"
              {...register('location', {
                required: 'Please, set the location',
              })}
            />
            {errors?.location?.message && (
              <Error>{errors.location.message}</Error>
            )}
          </LabelTitle>
          {choosedCategory === 'sell' && (
            <LabelTitle>
              Price{' '}
              <Warning as="span" color="red">
                *
              </Warning>
              :
              <InputEnter
                name="price"
                placeholder="10$"
                {...register('price', { required: 'Price is required' })}
              />
            </LabelTitle>
          )}
          <Box>
            <LabelTitle as="h4" mb={['8px', '12px']}>
              Load the pet’s image
            </LabelTitle>
            <FileLabel htmlFor="file">
              {watch('noticeAvatar') && watch('noticeAvatar').length !== 0 ? (
                <ImgFile
                  src={window.URL.createObjectURL(watch('noticeAvatar')[0])}
                  alt="pet"
                />
              ) : (
                <FileIcon />
              )}
            </FileLabel>
            {errors?.noticeAvatar?.message && (
              <Error>{errors.noticeAvatar.message}</Error>
            )}
            <Input
              type="file"
              id="file"
              name="noticeAvatar"
              accept="image/png, image/jpeg"
              hidden
              {...register('noticeAvatar', {
                required: 'Pet photo is required',
              })}
            />
          </Box>
          <LabelTitle>Comments</LabelTitle>
          <CommentInput
            as="textarea"
            name="comments"
            rows={rows}
            columns={width > 400 ? 50 : 20}
            borderRadius={rows > 1 && '20px'}
            value={commentVal}
            onChange={onChangeTextArea}
            placeholder="Leave your comment"
            // {...register('comments')}
          />
          <Box display={[null, 'flex']}>
            <ActionButton
              type="submit"
              mb={['12px', '0px']}
              order={[null, '1']}
            >
              Done
            </ActionButton>
            <ActionButton
              bg="white"
              color="black"
              mr={[null, '12px']}
              onClick={() => setNextpage(false)}
            >
              Back
            </ActionButton>
          </Box>
        </>
      )}
    </form>
  );
};

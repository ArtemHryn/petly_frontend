import { TextField } from '@mui/material';
import { Box } from 'components/Box';
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
  Wrapper,
} from './AddNoticeModal.styled';

export const AddNoticeModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState(1);
  const [nextPage, setNextpage] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: 'lost-found',
    },
  });

  const onChangeTextArea = e => {
    const { value } = e.target;
    const inputRows = value.split('\n').length;
    setRows(inputRows);
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
    if (!watch('noticeAvatar') || watch('noticeAvatar').length === 0) {
      setError('noticeAvatar', {
        type: 'custom',
        message: 'Photo is Required',
      });
      return;
    }
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'noticeAvatar') {
        formData.append(key, data[key][0]);
        return;
      }
      formData.append(key, data[key]);
    });
    dispatch(addNotice(formData));
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
              {...register('category')}
            />
            <Lable
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              htmlFor="lost-found"
            >
              lost/found{' '}
            </Lable>

            <Input
              type="radio"
              name="category"
              value="in-good-hands"
              id="in-good-hands"
              {...register('category')}
            />
            <Lable
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              htmlFor="in-good-hands"
            >
              in good hands{' '}
            </Lable>

            <Input
              type="radio"
              name="category"
              value="sell"
              id="sell"
              {...register('category')}
            />
            <Lable
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              htmlFor="sell"
            >
              sell{' '}
            </Lable>
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
          <LabelContainer mb={['20px', '30px', '20px']}>
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
          <LabelTitle htmlFor="date" mb={['8px', '12px']}>
            Date of birth
          </LabelTitle>
          <Wrapper>
            <TextField
              id="date"
              fullWidth
              type="date"
              min="1980-01-01"
              max={Date.now()}
              defaultValue="2017-05-24"
              {...register('birthdate', { required: 'birthdate is required' })}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Wrapper>
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
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              mb={['12px', '0px']}
              order={[null, '1']}
              onClick={onChangePage}
            >
              Next
            </ActionButton>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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

                <SexLabel
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  htmlFor="male"
                >
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
                <SexLabel
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  htmlFor="female"
                >
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
          {watch('category') === 'sell' && (
            <LabelTitle>
              Price{' '}
              <Warning as="span" color="red">
                *
              </Warning>
              :
              <InputEnter
                type="number"
                name="price"
                placeholder="10$"
                {...register('price', {
                  required: 'Price is required',
                  valueAsNumber: true,
                })}
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
              {...register('noticeAvatar')}
            />
          </Box>
          <Box mb={['40px']}>
            <LabelTitle>Comments</LabelTitle>
            <CommentInput
              as="textarea"
              name="comments"
              rows={rows}
              borderRadius={rows > 1 && '20px'}
              onChange={onChangeTextArea}
              placeholder="Leave your comment"
              {...register('comments', {
                required: 'Please, leave some comment',
                minLength: {
                  value: 8,
                  message: 'Comment must be min 8 symbols',
                },
              })}
            />
            {errors?.comments?.message && (
              <Error>{errors.comments.message}</Error>
            )}
          </Box>
          <Box display={[null, 'flex']}>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              mb={['12px', '0px']}
              order={[null, '1']}
            >
              Done
            </ActionButton>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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

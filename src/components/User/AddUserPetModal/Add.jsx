import { Box } from 'components/Box';
import { useDimensions } from 'helpers/useDimensions';
import { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/pets/petsOperations';
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
  Title,
  Warning,
} from './Add.styled';

export const AddUserPetModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
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
    const { name } = watch();
    if (!name) {
      setError(name === '' ? 'title' : 'name');
      return;
    }
    setNextpage(true);
  };
  const onFormSubmit = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'petPhoto') {
        formData.append(key, data[key][0]);
        return;
      }
      formData.append(key, data[key]);
    });
    formData.append('comments', commentVal);
    dispatch(addPet(formData));
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
          </Box>
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
              {...register('date', { required: 'date is required' })}
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
          <Box>
            <LabelTitle as="h4" mb={['8px', '12px']}>
              Load the pet’s image
            </LabelTitle>
            <FileLabel htmlFor="file">
              {watch('petPhoto') && watch('petPhoto').length !== 0 ? (
                <ImgFile
                  src={window.URL.createObjectURL(watch('petPhoto')[0])}
                  alt="pet"
                />
              ) : (
                <FileIcon />
              )}
            </FileLabel>
            {errors?.petPhoto?.message && (
              <Error>{errors.petPhoto.message}</Error>
            )}
            <Input
              type="file"
              id="file"
              name="petPhoto"
              accept="image/png, image/jpeg"
              hidden
              {...register('petPhoto', {
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

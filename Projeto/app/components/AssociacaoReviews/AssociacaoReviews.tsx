import axios from 'axios';
import { FC } from 'react';
import useSWR from 'swr';
import { Review } from '../models/review';
import Rating from '../Rating/Rating';

const AssociacaoReview: FC<{ associacaoId: string }> = ({ associacaoId }) => {
  const fetchAssociacaoReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/associacao-reviews/${associacaoId}`);
    return data;
  };

  const {
    data: associacaoReviews,
    error,
    isLoading,
  } = useSWR('/api/associacao-reviews', fetchAssociacaoReviews);

  if (error) throw new Error('Cannot fetch data');
  if (typeof associacaoReviews === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  console.log(associacaoReviews);

  return (
    <>
      {associacaoReviews &&
        associacaoReviews.map(review => (
          <div
            className='bg-gray-100 dark:bg-gray-900 p-4 rounded-lg'
            key={review._id}
          >
            <div className='font-semibold mb-2 flex'>
              <p>{review.user.name}</p>
              <div className='ml-4 flex items-center text-tertiary-light text-lg'>
                <Rating rating={review.userRating} />
              </div>
            </div>

            <p>{review.text}</p>
          </div>
        ))}
    </>
  );
};

export default AssociacaoReview;
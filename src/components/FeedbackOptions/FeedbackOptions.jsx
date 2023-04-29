import PropTypes from 'prop-types';
import { Options, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      {options.map(([el, func]) => (
        <li key={el}>
          <Button
            className={el}
            type="button"
            onClick={() => onLeaveFeedback(func)}
          >
            {el}
          </Button>
        </li>
      ))}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

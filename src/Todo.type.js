import PropTypes, { bool, string } from "prop-types";

export const TodoType = PropTypes.shape({
  text: string,
  complete: bool
});

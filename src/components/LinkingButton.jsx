import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi'; // Default icon (optional)

const LinkingButton = ({
  to,
  text = '',
  icon = null,
  target = '_self',
  className = '',
  iconPosition = 'left',
  onClick = () => {},
  isExternal = false
}) => {
  // If it's an external link, use a normal <a> tag
  if (isExternal) {
    return (
      <a
        href={to}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-all 
          hover:bg-opacity-90 active:scale-95 ${className} bg-gray-900 text-white`}
      >
        {icon && iconPosition === 'left' && icon}
        {text && <span>{text}</span>}
        {icon && iconPosition === 'right' && icon}
        {target === '_blank' && !icon && <FiExternalLink className="text-sm" />}
      </a>
    );
  }

  // For internal links, use React Router's Link
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-all 
        hover:bg-opacity-90 active:scale-95 ${className} bg-blue-600 text-white`}
    >
      {icon && iconPosition === 'left' && icon}
      {text && <span>{text}</span>}
      {icon && iconPosition === 'right' && icon}
    </Link>
  );
};

export default LinkingButton;
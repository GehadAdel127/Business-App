import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button onClick={() => onPageChange(currentPage - 1)} className="arrow">
                    &#xab;
                </button>
            )}
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
            {currentPage < totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)} className="arrow">
                    &#xbb;
                </button>
            )}
        </div>
    );
};

export default Pagination;

import { Button } from "@chakra-ui/react";

interface PaginationButtonProps {
  isCurrentPage?: boolean;
  pageNumber: number;
}

export function PaginationButton({ isCurrentPage = false, pageNumber }: PaginationButtonProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="sm"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >{pageNumber}</Button>
    );
  };

  return (
    <Button
      size="sm"
      fontSize="sm"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >{pageNumber}</Button>
  )
}

import styled from "styled-components"

export const NavigationList = styled.ul`
  list-style-type: none;
  left: 0;
  &:first-child {
      position: fixed;
  }
  transition: all 0.5s ease;

  &.active {
    max-height: 500px;
    opacity: 1;
    visibility: visible;
    transform: translateX(10px);
  }

  &.inactive {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateX(0);
  }
`

export const NavigationListItem = styled.li`
  list-style-type: none;
  margin: 0;
  width: 100%;
  display: block;
  padding-top: 10px;

  & > ul {
      padding: 0 1rem;
  }

  &:not(:last-child) {
    padding-bottom: 10px;
  }
`
import styled from "styled-components"

export const NavigationList = styled.ul`
  list-style-type: none;
  left: 0;
  &:first-child {
      position: fixed;
      margin-top: 4rem;
      width: 12rem;

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
  --main-color-opacity-50: rgba(var(--accent-light-rgb-400), 0.5);
  --main-color-opacity-20: rgba(var(--accent-light-rgb-400), 0.2);
  --main-color-opacity-10: rgba(var(--accent-light-rgb-400), 0.1);
  list-style-type: none;
  margin: 0;
  width: 100%;
  display: block;
  padding-top: 10px;
  color: var(--accent-dark-300);
  
  //Reduce padding in nested list
  & > ul {
      padding: 0 1rem;
  }

  & > a {
    padding: 10px;
    border-radius: 4px;
    display: inline-block;
    width: 100%;
  }

  &.active > a {
    background: var(--main-color-opacity-10);
    color: var(--accent-light-100);
  }


  &:hover {
    color: var(--accent-light-200);
  }

  &.active {
    color: var(--accent-light-300)
  }
`
import { useState } from "react"
import Link from 'next/link'
import { NavigationStructure } from "./NavigationStructure"
import {NavigationListItem, NavigationList} from "./NavigationStyles"

const CreateNavigationListItem = ({list, activeGroup, setActiveGroup}) => {
  return (
    list.map((item, i) => (
      <NavigationListItem
        key={i}
        onClick={() => setActiveGroup(item.link)}
        className={item.link === activeGroup ? 'active' : 'inactive'}
      >
        <Link href={`#${item.link}`}>{item.name}</Link>
        {item.children ?
          <NavigationList
            className={item.link === activeGroup ? 'active' : 'inactive'}
          >
            <CreateNavigationListItem
              list={item.children}
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
            />
          </NavigationList> : null}
      </NavigationListItem>
    ))
  )
}

export default function Navigation() {
  const [activeGroup, setActiveGroup] = useState('')
  return (
    <NavigationList>
      <CreateNavigationListItem
        list={NavigationStructure}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
      />
    </NavigationList>
  )
}
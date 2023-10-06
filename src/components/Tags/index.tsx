import { TagsContainer } from "./TagsStyles";

interface TagsProps {
  tags: string[];
}

export function Tags(props: TagsProps) {
  return (
    <TagsContainer>
      {props.tags.map((tag: string, index: number) => (
        <div key={index}>{tag.toLocaleUpperCase()}</div>
      ))}
    </TagsContainer>
  );
}

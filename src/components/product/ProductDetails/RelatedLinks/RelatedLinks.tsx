import React from "react";
import "./RelatedLinks.css";

interface LinkItem {
  id: number;
  label: string;
}

interface Props {
  links: LinkItem[];
}

const RelatedLinks: React.FC<Props> = ({ links }) => {
  return (
    <div className="related-links">
      {links.map((link) => (
        <div key={link.id} className="link-item">
          {link.label}
        </div>
      ))}
    </div>
  );
};

export default RelatedLinks;
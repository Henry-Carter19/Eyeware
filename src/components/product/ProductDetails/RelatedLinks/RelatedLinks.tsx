import React from "react";
import { ChevronRight } from "lucide-react";
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
          <span>{link.label}</span>
          <ChevronRight size={16} />
        </div>
      ))}
    </div>
  );
};

export default RelatedLinks;

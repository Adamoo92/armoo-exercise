import { useState } from "react";
import { IconLink } from "./IconLink";

export const H1 = ({ children }) => {
  const [linkShow, setLinkShow] = useState(false);

  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h1
      id={haveId ? children.toString().slice(idIndex + 2, -1) : children}
      onMouseEnter={() => setLinkShow(true)}
      onMouseLeave={() => setLinkShow(false)}
    >
      {linkShow ? (
        <a
          href={`#${
            haveId ? children.toString().slice(idIndex + 2, -1) : children
          }`}
        >
          <IconLink />
        </a>
      ) : (
        ""
      )}
      {haveId ? children.toString().slice(0, idIndex - 1) : children}
    </h1>
  );
};

export const H2 = ({ children }) => {
  const [linkShow, setLinkShow] = useState(false);

  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h2
      id={haveId ? children.toString().slice(idIndex + 2, -1) : children}
      onMouseEnter={() => setLinkShow(true)}
      onMouseLeave={() => setLinkShow(false)}
    >
      {linkShow ? (
        <a
          href={`#${
            haveId ? children.toString().slice(idIndex + 2, -1) : children
          }`}
        >
          <IconLink />
        </a>
      ) : (
        ""
      )}
      {haveId ? children.toString().slice(0, idIndex - 1) : children}
    </h2>
  );
};

export const H3 = ({ children }) => {
  const [linkShow, setLinkShow] = useState(false);

  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h3
      id={haveId ? children.toString().slice(idIndex + 2, -1) : children}
      onMouseEnter={() => setLinkShow(true)}
      onMouseLeave={() => setLinkShow(false)}
    >
      {linkShow ? (
        <a
          href={`#${
            haveId ? children.toString().slice(idIndex + 2, -1) : children
          }`}
        >
          <IconLink />
        </a>
      ) : (
        ""
      )}
      {haveId ? children.toString().slice(0, idIndex - 1) : children}
    </h3>
  );
};

export const H4 = ({ children }) => {
  const [linkShow, setLinkShow] = useState(false);

  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h4
      id={haveId ? children.toString().slice(idIndex + 2, -1) : children}
      onMouseEnter={() => setLinkShow(true)}
      onMouseLeave={() => setLinkShow(false)}
    >
      {linkShow ? (
        <a
          href={`#${
            haveId ? children.toString().slice(idIndex + 2, -1) : children
          }`}
        >
          <IconLink />
        </a>
      ) : (
        ""
      )}
      {haveId ? children.toString().slice(0, idIndex - 1) : children}
    </h4>
  );
};

export const H5 = ({ children }) => {
  const [linkShow, setLinkShow] = useState(false);

  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h5
      id={haveId ? children.toString().slice(idIndex + 2, -1) : children}
      onMouseEnter={() => setLinkShow(true)}
      onMouseLeave={() => setLinkShow(false)}
    >
      {linkShow ? (
        <a
          href={`#${
            haveId ? children.toString().slice(idIndex + 2, -1) : children
          }`}
        >
          <IconLink />
        </a>
      ) : (
        ""
      )}
      {haveId ? children.toString().slice(0, idIndex - 1) : children}
    </h5>
  );
};

export const H6 = ({ children }) => {
  const [linkShow, setLinkShow] = useState(false);

  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h6
      id={haveId ? children.toString().slice(idIndex + 2, -1) : children}
      onMouseEnter={() => setLinkShow(true)}
      onMouseLeave={() => setLinkShow(false)}
    >
      {linkShow ? (
        <a
          href={`#${
            haveId ? children.toString().slice(idIndex + 2, -1) : children
          }`}
        >
          <IconLink />
        </a>
      ) : (
        ""
      )}
      {haveId ? children.toString().slice(0, idIndex - 1) : children}
    </h6>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import TOOLS from '../tools.json';

export default function Tools() {
  return (
    <section id="tools" className="tools Portfolio__elem">
      <h2>Herramientas</h2>
      <div className="tools__elem">
        {TOOLS.map(item => (
          <ToolGroup
            key={item.id}
            title={item.title}
            tool_list={item.tool_list} />
        ))}
      </div>
    </section>
  );
}


function ToolGroup(props) {
  return (
    <div>
      <strong>{props.title}: </strong>
      <ToolList list={props.tool_list} />
    </div>
  );
}

ToolGroup.propTypes = {
  title: PropTypes.string.isRequired,
  tool_list: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function ToolList(props) {
  return (
    <ul>
      {props.list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

ToolList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}
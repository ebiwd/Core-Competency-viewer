import React from 'react';

import Collapsible from 'react-collapsible';

import styles from './domain-table.module.css';

import { Link } from 'react-router-dom';

type Props = {
  domains: import('../../models/competency').CleanDomain[];
};

let data: {
  id: string;
  title: string;
  competency_profile: [{ competency_id: 'string' }];
}[] = [];

fetch('https://cms.competency.ebi.ac.uk/api/resources?_format=json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    //console.log(data[0])
  });

export const DomainTable = React.memo(({ domains }: Props) => (
  <>
    {domains.map(({ id, title, competencies }) => (
      <span key={id}>
        <div className={styles.Heading}>{title} </div>
        <table className="table table-striped">
          <tbody>
            {competencies.map(({ id, title, attributes }) => (
              <tr>
                <td>
                  <Collapsible key={id} tabIndex={0.1} trigger={title}>
                    {(['Knowledge', 'Skill', 'Attitude'] as (
                      | 'Knowledge'
                      | 'Skill'
                      | 'Attitude')[]).map(kind =>
                      attributes[kind].length < 1 ? null : (
                        <div key={kind}>
                          {kind}:
                          <ul>
                            {attributes[kind].map(attribute => (
                              <li key={attribute}>{attribute}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                    <div>
                      Training resources:
                      <ul>
                        {data.map(item =>
                          item.competency_profile
                            .filter(
                              (competency, index, all) =>
                                all.findIndex(
                                  c =>
                                    c.competency_id === competency.competency_id
                                ) === index
                            )
                            .map(profile => {
                              if (profile.competency_id.toString() === id) {
                                //console.log(id +" "+ item.title)

                                return (
                                  <li key={id}>
                                    <Link to={`/training/${item.id}`}>
                                      {item.title}
                                    </Link>
                                  </li>
                                );
                              } else {
                                return null;
                              }
                            })
                        )}
                      </ul>
                    </div>
                  </Collapsible>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    ))}
  </>
));

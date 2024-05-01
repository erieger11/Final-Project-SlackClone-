import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './workspace.reducer';

export const WorkspaceDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const workspaceEntity = useAppSelector(state => state.workspace.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="workspaceDetailsHeading">Workspace</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{workspaceEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{workspaceEntity.name}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{workspaceEntity.status}</dd>
          <dt>Members</dt>
          <dd>
            {workspaceEntity.members
              ? workspaceEntity.members.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {workspaceEntity.members && i === workspaceEntity.members.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/workspace" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/workspace/${workspaceEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default WorkspaceDetail;

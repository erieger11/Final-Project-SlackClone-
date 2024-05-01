package rocks.zipcode.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import rocks.zipcode.domain.Workspace;

/**
 * Spring Data JPA repository for the Workspace entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, Long> {}

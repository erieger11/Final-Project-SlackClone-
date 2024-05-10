package rocks.zipcode.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static rocks.zipcode.domain.UserProfileTestSamples.*;
import static rocks.zipcode.domain.WorkspaceTestSamples.*;

import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;
import rocks.zipcode.web.rest.TestUtil;

class WorkspaceTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Workspace.class);
        Workspace workspace1 = getWorkspaceSample1();
        Workspace workspace2 = new Workspace();
        assertThat(workspace1).isNotEqualTo(workspace2);

        workspace2.setId(workspace1.getId());
        assertThat(workspace1).isEqualTo(workspace2);

        workspace2 = getWorkspaceSample2();
        assertThat(workspace1).isNotEqualTo(workspace2);
    }

    @Test
    void membersTest() throws Exception {
        Workspace workspace = getWorkspaceRandomSampleGenerator();
        UserProfile userProfileBack = getUserProfileRandomSampleGenerator();

        workspace.addMembers(userProfileBack);
        assertThat(workspace.getMembers()).containsOnly(userProfileBack);
        assertThat(userProfileBack.getWorkspaces()).containsOnly(workspace);

        workspace.removeMembers(userProfileBack);
        assertThat(workspace.getMembers()).doesNotContain(userProfileBack);
        assertThat(userProfileBack.getWorkspaces()).doesNotContain(workspace);

        workspace.members(new HashSet<>(Set.of(userProfileBack)));
        assertThat(workspace.getMembers()).containsOnly(userProfileBack);
        assertThat(userProfileBack.getWorkspaces()).containsOnly(workspace);

        workspace.setMembers(new HashSet<>());
        assertThat(workspace.getMembers()).doesNotContain(userProfileBack);
        assertThat(userProfileBack.getWorkspaces()).doesNotContain(workspace);
    }
}

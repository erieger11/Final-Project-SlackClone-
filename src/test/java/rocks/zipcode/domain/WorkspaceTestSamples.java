package rocks.zipcode.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class WorkspaceTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Workspace getWorkspaceSample1() {
        return new Workspace().id(1L).name("name1").status("status1");
    }

    public static Workspace getWorkspaceSample2() {
        return new Workspace().id(2L).name("name2").status("status2");
    }

    public static Workspace getWorkspaceRandomSampleGenerator() {
        return new Workspace().id(longCount.incrementAndGet()).name(UUID.randomUUID().toString()).status(UUID.randomUUID().toString());
    }
}

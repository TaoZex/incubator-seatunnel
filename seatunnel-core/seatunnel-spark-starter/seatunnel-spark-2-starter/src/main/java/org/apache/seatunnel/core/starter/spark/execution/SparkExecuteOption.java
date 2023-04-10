package org.apache.seatunnel.core.starter.spark.execution;

import org.apache.seatunnel.api.configuration.Option;
import org.apache.seatunnel.api.configuration.Options;

public interface SparkExecuteOption {

    Option<String> CHECKPOINT_LOCATION =
        Options.key("checkpoint.interval")
            .stringType()
            .defaultValue("/tmp")
            .withDescription("Spark checkpoint path, default is /tmp," +
                " Please pay attention to read and write permissions, it's hdfs path when spark on yarn");
}

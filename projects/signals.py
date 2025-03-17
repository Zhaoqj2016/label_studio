from django.dispatch import Signal


class ProjectSignals:
    """
    Signals for project: implements observer pattern for custom signals.
    Example:

    # publisher
    ProjectSignals.my_signal.send(sender=self, project=project)

    # observer
    @receiver(ProjectSignals.my_signal)
    def my_observer(sender, **kwargs):
        ...
    """

    post_label_config_and_import_tasks = Signal()

const ComponentName = (props) => (
  <Location>
    {({ location }) => (
      <TransitionGroup>
        <Transition
          key={location.key}
          timeout={{
            enter: timeout,

            exit: timeout,
          }}
        >
          {(status) => (
            <div
              className={status}
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {props.children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    )}
  </Location>
);

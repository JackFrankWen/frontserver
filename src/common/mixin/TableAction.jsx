export default {
  componentDidMount() {
      const {current, pageSize} = {...this.state.pagiation}
    this.onTableChange({
      current,
      pageSize,
    })
  },
  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.onTableChange({
        current: 1,
        pageSize: this.state.pagination.pageSize,
      });
    }
  },
  onTableChange() {
    const pager = {...this.state.pagiation};
    pager.current = pagiation.current;
    pager.pageSize = pagiation.pageSize;
    this.setState({
      pagiation: pager
    });
    const params = {
      pageSize: pagiation.pageSize,
      currentPage: pagiation.current,
    };
    this.fetch(params)
  },
  refresh() {
    const {pageSize, current} = this.state.pagination;
    this.fetch({
      pageSize,
      currentPage: current,
    });
  }

}
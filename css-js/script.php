
    <!-- bootstrap -->
    <!-- Teeratus_R 2023-11-30 
    disable bootstrap.bundle.min.js
    replace with popper.min.js and bootstrap.min.js
    -->
    <!-- <script src="../bootstrap/bootstrap.bundle.min.js"></script> -->
    
    <script src="../bootstrap/popper.min.js"></script>
    <script src="../bootstrap/bootstrap.min.js"></script>
    <!-- /bootstrap -->

    <!-- scroll_to_top_step3 -->
    <script src="../css-js/scroll_to_top_step3.js"></script>
    <!-- /scroll_to_top_step3 -->

    

    <!-- datatables -->
    <script src="../datatables/jquery-3.5.1.js"></script>
    <script src="../datatables/jquery.dataTables.min.js"></script>
    <script src="../datatables/dataTables.bootstrap5.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#dataTables-all').DataTable();
        });

        // Multiple tables
        new DataTable('table.display');
    </script>
    <!-- /datatables -->
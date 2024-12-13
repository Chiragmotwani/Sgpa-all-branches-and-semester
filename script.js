        function redirectToPage() {
            var branch = document.getElementById("branch").value;
            var semester = document.getElementById("semester").value;
            var destination = branch + "/" + semester +  "/index.html";
            document.getElementById("branchSemesterForm").action = destination;
        }

        

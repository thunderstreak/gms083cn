package net.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;

/**
 * A utility class to stop the HeavenMS server.
 */
public class ServerStop {
    
    public static void main(String[] args) {
        try {
            // Try to find and stop the server process
            stopServer();
        } catch (Exception e) {
            System.err.println("Error stopping server: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    private static void stopServer() throws IOException, InterruptedException {
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            stopServerWindows();
        } else {
            stopServerUnix();
        }
    }
    
    private static void stopServerUnix() throws IOException, InterruptedException {
        System.out.println("Searching for HeavenMS server process on Unix/Linux...");
        
        // Try to find the process using jps
        Process jpsProcess = Runtime.getRuntime().exec("jps");
        BufferedReader reader = new BufferedReader(new InputStreamReader(jpsProcess.getInputStream()));
        String line;
        String pid = null;
        
        while ((line = reader.readLine()) != null) {
            if (line.contains("Server") && !line.contains("Jps")) {
                pid = line.split("\\s+")[0];
                break;
            }
        }
        
        // If jps didn't work, try with ps
        if (pid == null) {
            Process psProcess = Runtime.getRuntime().exec("ps aux");
            reader = new BufferedReader(new InputStreamReader(psProcess.getInputStream()));
            
            while ((line = reader.readLine()) != null) {
                if (line.contains("net.server.Server") && !line.contains("grep")) {
                    String[] parts = line.split("\\s+");
                    for (String part : parts) {
                        if (part.matches("\\d+")) {
                            pid = part;
                            break;
                        }
                    }
                    break;
                }
            }
        }
        
        // Try to read from PID file if process not found
        if (pid == null) {
            File pidFile = new File("heavenms.pid");
            if (pidFile.exists()) {
                pid = new String(Files.readAllBytes(pidFile.toPath())).trim();
            }
        }
        
        if (pid != null && !pid.isEmpty()) {
            System.out.println("Found server process with PID: " + pid);
            System.out.println("Stopping server...");
            
            // Try graceful shutdown first
            Process killProcess = Runtime.getRuntime().exec("kill " + pid);
            killProcess.waitFor();
            
            // Wait a moment
            Thread.sleep(5000);
            
            // Check if still running
            Process checkProcess = Runtime.getRuntime().exec("kill -0 " + pid);
            int exitCode = checkProcess.waitFor();
            
            if (exitCode == 0) {
                // Still running, force kill
                System.out.println("Server did not stop gracefully. Forcing termination...");
                Process forceKillProcess = Runtime.getRuntime().exec("kill -9 " + pid);
                forceKillProcess.waitFor();
            }
            
            System.out.println("Server stopped successfully.");
            
            // Remove PID file if exists
            File pidFile = new File("heavenms.pid");
            if (pidFile.exists()) {
                pidFile.delete();
            }
        } else {
            System.out.println("Server process not found.");
            
            // Remove stale PID file if exists
            File pidFile = new File("heavenms.pid");
            if (pidFile.exists()) {
                pidFile.delete();
                System.out.println("Removed stale PID file.");
            }
        }
    }
    
    private static void stopServerWindows() throws IOException, InterruptedException {
        System.out.println("Searching for HeavenMS server process on Windows...");
        
        // Try to find the process using tasklist
        Process tasklistProcess = Runtime.getRuntime().exec("tasklist");
        BufferedReader reader = new BufferedReader(new InputStreamReader(tasklistProcess.getInputStream()));
        String line;
        String pid = null;
        
        while ((line = reader.readLine()) != null) {
            if (line.contains("java.exe") && line.contains("net.server.Server")) {
                String[] parts = line.split("\\s+");
                for (String part : parts) {
                    if (part.matches("\\d+")) {
                        pid = part;
                        break;
                    }
                }
                break;
            }
        }
        
        // Try to read from PID file if process not found
        if (pid == null) {
            File pidFile = new File("heavenms.pid");
            if (pidFile.exists()) {
                pid = new String(Files.readAllBytes(pidFile.toPath())).trim();
            }
        }
        
        if (pid != null && !pid.isEmpty()) {
            System.out.println("Found server process with PID: " + pid);
            System.out.println("Stopping server...");
            
            // Try graceful shutdown first
            Process killProcess = Runtime.getRuntime().exec("taskkill /PID " + pid);
            killProcess.waitFor();
            
            // Wait a moment
            Thread.sleep(5000);
            
            // Check if still running
            Process checkProcess = Runtime.getRuntime().exec("tasklist /fi \"PID eq " + pid + "\"");
            BufferedReader checkReader = new BufferedReader(new InputStreamReader(checkProcess.getInputStream()));
            boolean stillRunning = false;
            while ((line = checkReader.readLine()) != null) {
                if (line.contains(pid)) {
                    stillRunning = true;
                    break;
                }
            }
            
            if (stillRunning) {
                // Still running, force kill
                System.out.println("Server did not stop gracefully. Forcing termination...");
                Process forceKillProcess = Runtime.getRuntime().exec("taskkill /F /PID " + pid);
                forceKillProcess.waitFor();
            }
            
            System.out.println("Server stopped successfully.");
            
            // Remove PID file if exists
            File pidFile = new File("heavenms.pid");
            if (pidFile.exists()) {
                pidFile.delete();
            }
        } else {
            System.out.println("Server process not found.");
            
            // Remove stale PID file if exists
            File pidFile = new File("heavenms.pid");
            if (pidFile.exists()) {
                pidFile.delete();
                System.out.println("Removed stale PID file.");
            }
        }
    }
}